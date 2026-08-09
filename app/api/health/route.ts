export function GET() {
  return Response.json({
    ok: true,
    service: "norbapp-web",
    timestamp: new Date().toISOString(),
  });
}
