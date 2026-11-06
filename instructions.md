# MRR Command Center

## Español

1. **Entra.** Abre la interfaz *Dashboard*. La contraseña está en *Acciones → Mostrar contraseña* (con *Restablecer contraseña* creas otra).
2. **Vincula tu clave de MRR.** En MiningRigRentals crea una clave API con **Withdraw: No** o **Read** (una clave que puede retirar se rechaza), **Rent: Yes** (o **Read** si solo quieres mirar) y **Rigs: No**. Pégala en el dashboard: se comprueba con MRR y se guarda solo en este servidor. Puedes desvincularla o cambiarla cuando quieras.
3. **Elige el perfil de pool de MRR.** Los rigs alquilados minan contra el perfil que elijas, y ese perfil tiene que apuntar al stratum de tu DATUM **tal como se ve desde internet**: tu IP pública o dominio y el puerto de stratum de DATUM redirigido en tu router. Una dirección `.local` o de tu red de casa no sirve: MRR no la alcanza.

Cada alquiler se hace a mano, con un botón y una confirmación. El dashboard compara lo que entrega cada alquiler con lo que llega a tu DATUM Gateway, que tiene que estar instalado y en marcha.

## English

1. **Sign in.** Open the *Dashboard* interface. The password is in *Actions → Show password* (*Reset password* makes a new one).
2. **Link your MRR key.** On MiningRigRentals create an API key with **Withdraw: No** or **Read** (a key that can withdraw is refused), **Rent: Yes** (or **Read** to only look) and **Rigs: No**. Paste it into the dashboard: it is checked with MRR and kept only on this server. You can unlink or replace it at any time.
3. **Choose the MRR pool profile.** Rented rigs mine to the profile you choose, and it must point at your DATUM's stratum **as seen from the internet**: your public IP or domain and the DATUM stratum port forwarded on your router. A `.local` or home-network address does not work: MRR cannot reach it.

Every rental is made by hand, with a button and a confirmation. The dashboard compares what each rental delivers with what reaches your DATUM Gateway, which must be installed and running.
