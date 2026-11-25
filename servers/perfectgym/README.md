# PerfectGym MCP by usefulapi

Use your [PerfectGym](https://www.perfectgym.com) account from Claude, Cursor, or any MCP client. Read classes, members, contracts and payments, and book or cancel classes or add member notes and leads. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://perfectgym.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://perfectgym.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http perfectgym https://perfectgym.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=perfectgym&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fperfectgym.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "perfectgym": {
      "url": "https://perfectgym.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PerfectGym credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/perfectgym/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **PerfectGym company name** (the `acme` part of `acme.perfectgym.pl`), and the **API client ID** and **API client secret** from PGM → Settings → API clients. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `perfectgym_list_clubs` | read | List clubs |
| `perfectgym_list_classes` | read | List classes |
| `perfectgym_get_class` | read | Get a class |
| `perfectgym_list_class_bookings` | read | List class bookings |
| `perfectgym_search_members` | read | Search members |
| `perfectgym_get_member` | read | Get a member |
| `perfectgym_list_contracts` | read | List contracts |
| `perfectgym_list_contract_payments` | read | List contract payments |
| `perfectgym_get_contract_payment_schedule` | read | Get contract payment schedule |
| `perfectgym_list_membership_types` | read | List membership types |
| `perfectgym_book_class` | **write** | Book a class for a member |
| `perfectgym_cancel_class_booking` | **write** | Cancel one class booking |
| `perfectgym_add_member_note` | **write** | Add a member note |
| `perfectgym_add_lead` | **write** | Add a CRM lead |
| `perfectgym_usage_status` | meta | Usage status (free-tier meter) |
| `perfectgym_request_feature` | meta | Request a missing feature |
| `perfectgym_upgrade` | meta | Upgrade to Pro or Pro+ |
| `perfectgym_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `perfectgym_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `perfectgym_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `perfectgym_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
