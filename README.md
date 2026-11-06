# MRR Command Center for StartOS

[MRR Command Center](https://github.com/Kilombino/mrr-command-center) packaged for StartOS 0.4. A dashboard to rent BLAKE2b hashrate on MiningRigRentals by hand (a button and a confirmation, no bot) and check each rental's delivered hashrate against your own DATUM gateway.

## Credits

- Built on [MarcanoFilms](https://github.com/MarcanoFilms)' mrr-blake2b-bot (MIT).
- The audit, manual renting and the Umbrel/StartOS packaging are by [Kilombino](https://github.com/Kilombino).

## How it works

- **Image:** `ghcr.io/kilombino/mrr-command-center:1.0.0` (amd64 + arm64), built from the upstream repo's `Dockerfile`: `python:3.13-slim`, standard library only, runs as uid 1000, `CMD python3 -I /app/dashboard.py`. One daemon, `dashboard`, preceded by a `chown` oneshot (as root) that gives `/data` to uid 1000.
- **Interface:** `ui` (type ui) on port 7160. The dashboard has its own sign-in; the root answers with the login page and HTTP 401. The health check is an HTTP fetch of `http://127.0.0.1:7160/` and any response counts.
- **Volume `main`:**
  - `store.json` (volume root, not visible to the app): the sign-in password, generated on install.
  - `data/` mounted at `/data` (`MRR_DATA_DIR`): `config.json` (the linked MRR key, the pool profile, settings), state, `audit.db`.
- **Dependency:** DATUM Gateway (`datum`), required and running, any version (flavored versions like `#kilombino:0.5.0:0`). Its `main` volume, subpath `data`, is mounted read-only at `/datum`.
- **Environment:**

| Variable | Value |
| --- | --- |
| `MRR_DATA_DIR` | `/data` |
| `MRR_PACKAGED` | `1` |
| `MRR_PORT` | `7160` |
| `MRR_DASHBOARD_PASSWORD` | the password in `store.json` |
| `MRR_PASSWORD_HINT` | "La contraseña está en StartOS: Acciones, Mostrar contraseña." |
| `MRR_DATUM_CONFIG` | `/datum/datum_gateway_config.json` (the app reads `api.admin_password` from it) |
| `MRR_GATEWAY_URL` | `http://<bridge address>` of DATUM's host `main`, port 7152 (`sdk.host.getBridgeAddress`); unset while DATUM publishes no binding |
| `MRR_GATEWAY_PASSWORD` | `api.admin_password` read from DATUM's config by the package, in case the file is not readable by uid 1000 |

  main restarts when the password, DATUM's bridge address or DATUM's admin password change.
- **MRR API key:** linked from inside the dashboard after sign-in; nothing to configure in StartOS.

## Actions

- **Show password:** the dashboard's sign-in password.
- **Reset password:** makes a new one and restarts the dashboard with it. The linked MRR key and settings are kept.

## Backups

The whole `main` volume: password, MRR key, settings, state and audit database.

## Diagnosing

- *Gateway unreachable* in the dashboard: DATUM must be running; check that its API (port 7152) answers and that its admin password is set (DATUM's Reset Password action).
- Rentals deliver nothing: the MRR pool profile must point at DATUM's stratum from the internet (public IP/domain and the stratum port forwarded on the router).

## License

MIT, the upstream application's license (see `LICENSE`).
