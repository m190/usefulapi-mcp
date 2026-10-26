# Semble MCP by usefulapi

**Live endpoint:** `https://semble.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://semble.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http semble https://semble.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=semble&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsemble.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "semble": {
      "url": "https://semble.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Semble credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/semble/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **Semble API token** and choose Production or Sandbox. They are validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `semble_get_practice` | read | Get the practice |
| `semble_list_patients` | read | List or search patients |
| `semble_get_patient` | read | Get a patient |
| `semble_list_patient_bookings` | read | List a patient's bookings |
| `semble_list_bookings` | read | List bookings |
| `semble_get_booking` | read | Get a booking |
| `semble_list_users` | read | List users (staff) |
| `semble_get_user` | read | Get a user (staff) |
| `semble_list_products` | read | List products and services |
| `semble_get_product` | read | Get a product or service |
| `semble_list_invoices` | read | List invoices |
| `semble_get_invoice` | read | Get an invoice |
| `semble_list_contacts` | read | List contacts |
| `semble_list_tasks` | read | List tasks |
| `semble_list_labels` | read | List patient labels |
| `semble_create_task` | **write** | Create a task (WRITE) |
| `semble_update_task` | **write** | Update a task (WRITE) |
| `semble_add_patient_label` | **write** | Add a label to a patient (WRITE) |
| `semble_create_patient` | **write** | Create a patient (WRITE) |
| `semble_usage_status` | meta | Usage status (free-tier meter) |
| `semble_request_feature` | meta | Request a missing feature |
| `semble_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `semble_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `semble_upgrade` (it returns a Stripe Checkout link). Cancel any time with `semble_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `semble_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
