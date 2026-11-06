import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'mrr-command-center',
  title: 'MRR Command Center',
  license: 'MIT',
  packageRepo: 'https://github.com/Kilombino/mrr-command-center-startos',
  upstreamRepo: 'https://github.com/Kilombino/mrr-command-center',
  marketingUrl: 'https://github.com/Kilombino/mrr-command-center',
  donationUrl: null,
  description: { short, long },
  // main: store.json (the sign-in password) at the root, and data/ mounted at /data
  // (MRR_DATA_DIR): config.json with the linked MRR key, state, audit.db.
  volumes: ['main'],
  images: {
    'mrr-command-center': {
      // The Dockerfile of github.com/Kilombino/mrr-command-center (branch packaged):
      // python:3.13-slim, standard library only, USER 1000, CMD
      // python3 -I /app/dashboard.py. Pulled by tag at pack time (multi-arch).
      source: {
        dockerTag: 'ghcr.io/kilombino/mrr-command-center:1.0.0',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
