# Persona MCP by usefulapi

Read Persona inquiries, accounts, verifications and reports. Hosted, no local install.

**Live endpoint:** `https://persona.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "persona": {
      "url": "https://persona.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Persona credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `persona_list_inquiries` | read | List inquiries |
| `persona_get_inquiry` | read | Get inquiry |
| `persona_list_accounts` | read | List accounts |
| `persona_get_account` | read | Get account |
| `persona_get_verification` | read | Get verification |
| `persona_list_reports` | read | List reports |
| `persona_get_report` | read | Get report |
| `persona_list_cases` | read | List cases |
| `persona_get_case` | read | Get case |
| `persona_list_transactions` | read | List transactions |
| `persona_get_transaction` | read | Get transaction |
| `persona_list_events` | read | List events |
| `persona_get_event` | read | Get event |
| `persona_add_account_tag` | **write** | Add account tag |
| `persona_usage_status` | meta | Usage status (free-tier meter) |
| `persona_upgrade` | meta | Upgrade to Pro (unlimited) |
| `persona_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `persona_upgrade` (it returns a Stripe Checkout link). Cancel any time with `persona_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `persona_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
