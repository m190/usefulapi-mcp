# Onfido MCP by usefulapi

Create and read Onfido applicants, documents, checks and reports. Hosted, no local install.

**Live endpoint:** `https://onfido.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://onfido.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http onfido https://onfido.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=onfido&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fonfido.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "onfido": {
      "url": "https://onfido.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Onfido credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/onfido/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Onfido credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `onfido_list_applicants` | read | List applicants |
| `onfido_get_applicant` | read | Get applicant |
| `onfido_list_documents` | read | List documents |
| `onfido_get_document` | read | Get document |
| `onfido_list_checks` | read | List checks |
| `onfido_get_check` | read | Get check |
| `onfido_list_reports` | read | List reports |
| `onfido_get_report` | read | Get report |
| `onfido_list_workflow_runs` | read | List workflow runs |
| `onfido_get_workflow_run` | read | Get workflow run |
| `onfido_list_live_photos` | read | List live photos |
| `onfido_list_live_videos` | read | List live videos |
| `onfido_create_applicant` | **write** | Create applicant |
| `onfido_update_applicant` | **write** | Update applicant |
| `onfido_usage_status` | meta | Usage status (free-tier meter) |
| `onfido_request_feature` | meta | Request a missing feature |
| `onfido_upgrade` | meta | Upgrade to Pro (unlimited) |
| `onfido_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `onfido_upgrade` (it returns a Stripe Checkout link). Cancel any time with `onfido_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `onfido_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
