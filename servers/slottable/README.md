# Slottable MCP by usefulapi

Use your [Slottable](https://slottable.com) account from Claude, Cursor, or any MCP client. It reads contacts, slot types, dated slots, rosters, bookings and webhook subscriptions, and it changes nothing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://slottable.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://slottable.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http slottable https://slottable.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=slottable&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fslottable.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "slottable": {
      "url": "https://slottable.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Slottable credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/slottable/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Slottable company API token** (Slottable → Integrations & API in the company settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `slottable_list_contacts` | read | List contacts |
| `slottable_get_contact` | read | Get a contact |
| `slottable_list_slot_types` | read | List slot types |
| `slottable_get_slot_type` | read | Get a slot type |
| `slottable_list_slot_type_instances` | read | List slot type instances |
| `slottable_get_slot_type_instance` | read | Get a slot type instance |
| `slottable_list_slot_type_instance_roster` | read | List a slot's roster |
| `slottable_list_slot_type_instance_bookings` | read | List a slot's bookings |
| `slottable_list_latest_booking_contacts` | read | List latest booking contacts |
| `slottable_list_webhooks` | read | List webhooks |
| `slottable_get_webhook` | read | Get a webhook |
| `slottable_usage_status` | meta | Usage status (free-tier meter) |
| `slottable_request_feature` | meta | Request a missing feature |
| `slottable_upgrade` | meta | Upgrade to Pro or Pro+ |
| `slottable_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `slottable_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `slottable_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `slottable_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
