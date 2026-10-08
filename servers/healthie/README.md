# Healthie MCP by usefulapi

Query patients, appointments, charting forms, tasks and metrics in your Healthie practice — and create tasks and notes — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Healthie API key.

**Live endpoint:** `https://healthie.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/healthie

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://healthie.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http healthie https://healthie.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=healthie&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhealthie.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "healthie": {
      "url": "https://healthie.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/healthie/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Healthie API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `healthie_current_user` | read | Current user |
| `healthie_get_organization` | read | Get organization |
| `healthie_list_patients` | read | List patients |
| `healthie_get_user` | read | Get user |
| `healthie_list_appointments` | read | List appointments |
| `healthie_get_appointment` | read | Get appointment |
| `healthie_list_appointment_types` | read | List appointment types |
| `healthie_list_forms` | read | List forms |
| `healthie_list_form_answer_groups` | read | List form answer groups |
| `healthie_list_documents` | read | List documents |
| `healthie_list_tasks` | read | List tasks |
| `healthie_list_goals` | read | List goals |
| `healthie_list_metric_entries` | read | List metric entries |
| `healthie_list_conversations` | read | List conversations |
| `healthie_create_task` | **write** | Create task |
| `healthie_create_note` | **write** | Create note |
| `healthie_usage_status` | meta | Usage status (free-tier meter) |
| `healthie_upgrade` | meta | Upgrade to Pro (unlimited) |
| `healthie_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `healthie_upgrade` (it returns a Stripe Checkout link). Cancel any time with `healthie_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `healthie_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
