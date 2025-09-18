// Placeholder data retention job. Wire via K8s CronJob or scheduler adapter.
export async function runDataRetention(): Promise<void> {
  // TODO: implement deletion/archival based on your domain rules.
  console.log('[job] data retention run at', new Date().toISOString());
}

if (process.argv[1]?.includes('dataRetention')) {
  runDataRetention().catch((e) => {
    console.error('[job] data retention failed:', e);
    process.exit(1);
  });
}

