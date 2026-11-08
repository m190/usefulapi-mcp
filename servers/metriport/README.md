# Metriport MCP by usefulapi

Query patients, facilities, medical documents, and FHIR records from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Metriport API key.

**Live endpoint:** `https://metriport.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/metriport

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://metriport.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http metriport https://metriport.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=metriport&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmetriport.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "metriport": {
      "url": "https://metriport.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Metriport credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/metriport/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Metriport API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `metriport_list_facilities` | read | List facilities |
| `metriport_get_facility` | read | Get facility |
| `metriport_list_patients` | read | List patients |
| `metriport_get_patient` | read | Get patient |
| `metriport_list_documents` | read | List documents |
| `metriport_get_document_query_status` | read | Get document query status |
| `metriport_get_document_url` | read | Get document download URL |
| `metriport_list_consolidated_queries` | read | List consolidated queries |
| `metriport_get_medical_record_summary` | read | Get medical record summary |
| `metriport_create_patient` | **write** | Create patient |
| `metriport_start_document_query` | **write** | Start document query |
| `metriport_start_consolidated_query` | **write** | Start consolidated query |
| `metriport_usage_status` | meta | Usage status (free-tier meter) |
| `metriport_request_feature` | meta | Request a missing feature |
| `metriport_upgrade` | meta | Upgrade to Pro or Pro+ |
| `metriport_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `metriport_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `metriport_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `metriport_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
