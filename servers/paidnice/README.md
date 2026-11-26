# Paidnice MCP by usefulapi

Use your [Paidnice](https://www.paidnice.com) account from Claude, Cursor, or any MCP client. Read invoices, contacts, actions, replies and Stripe payments, and assign contacts or invoices to team members. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://paidnice.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://paidnice.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http paidnice https://paidnice.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=paidnice&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpaidnice.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "paidnice": {
      "url": "https://paidnice.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Paidnice credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/paidnice/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Paidnice API token** (Settings → General → Advanced → API Tokens; the two assign tools need a write-scope token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `paidnice_get_organisation` | read | Get organisation |
| `paidnice_get_organisation_summary` | read | Get organisation summary |
| `paidnice_list_users` | read | List team members |
| `paidnice_list_contacts` | read | List contacts |
| `paidnice_get_contact` | read | Get contact |
| `paidnice_check_contact_policies` | read | Check contact policies |
| `paidnice_list_invoices` | read | List invoices |
| `paidnice_get_invoice` | read | Get invoice |
| `paidnice_check_invoice_policies` | read | Check invoice policies |
| `paidnice_list_actions` | read | List actions |
| `paidnice_list_notes` | read | List notes |
| `paidnice_list_inbound_sms` | read | List inbound SMS |
| `paidnice_list_inbound_email` | read | List inbound email |
| `paidnice_list_stripe_payments` | read | List Stripe payments |
| `paidnice_update_contact_assignee` | **write** | Assign contact |
| `paidnice_update_invoice_assignee` | **write** | Assign invoice |
| `paidnice_usage_status` | meta | Usage status (free-tier meter) |
| `paidnice_request_feature` | meta | Request a missing feature |
| `paidnice_upgrade` | meta | Upgrade to Pro or Pro+ |
| `paidnice_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `paidnice_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `paidnice_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `paidnice_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
