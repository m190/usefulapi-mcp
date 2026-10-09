# Canvas Medical MCP by usefulapi

Search and read a patient chart over the Canvas FHIR R4 API. Read-only. Hosted, no local install.

**Live endpoint:** `https://canvas-medical.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://canvas-medical.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http canvas-medical https://canvas-medical.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=canvas-medical&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcanvas-medical.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "canvas-medical": {
      "url": "https://canvas-medical.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Canvas Medical credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/canvas-medical/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Canvas Medical credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `canvas_search` | read | Search a FHIR resource |
| `canvas_read` | read | Read one FHIR resource |
| `canvas_get_patient_everything` | read | Get everything for one patient |
| `canvas_get_capability_statement` | read | Get the FHIR capability statement |
| `canvas_medical_usage_status` | meta | Usage status (free-tier meter) |
| `canvas_medical_upgrade` | meta | Upgrade to Pro (unlimited) |
| `canvas_medical_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `canvas_medical_upgrade` (it returns a Stripe Checkout link). Cancel any time with `canvas_medical_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `canvas_medical_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
