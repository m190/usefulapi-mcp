# Bookboost MCP by usefulapi

Use your [Bookboost](https://bookboost.io) account from Claude, Cursor, or any MCP client. Read guest profiles, reservations and loyalty programs, and create or update guests and reservations. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bookboost.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bookboost.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bookboost https://bookboost.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bookboost&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbookboost.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bookboost": {
      "url": "https://bookboost.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bookboost credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bookboost/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Bookboost API key** (Bookboost dashboard → **Generate API token**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bookboost_list_users` | read | List users |
| `bookboost_get_user` | read | Get a user |
| `bookboost_list_user_emails` | read | List a user's emails |
| `bookboost_list_user_phones` | read | List a user's phones |
| `bookboost_list_user_addresses` | read | List a user's addresses |
| `bookboost_list_user_loyalty_memberships` | read | List a user's loyalty memberships |
| `bookboost_list_reservations` | read | List reservations |
| `bookboost_get_reservation` | read | Get a reservation |
| `bookboost_create_reservation` | **write** | Create a reservation |
| `bookboost_update_reservation` | **write** | Update a reservation |
| `bookboost_create_user` | **write** | Create a user |
| `bookboost_update_user` | **write** | Update a user |
| `bookboost_list_user_lists` | read | List user lists |
| `bookboost_get_user_list` | read | Get a user list |
| `bookboost_list_user_tags` | read | List user tags |
| `bookboost_list_loyalty_programs` | read | List loyalty programs |
| `bookboost_get_loyalty_program` | read | Get a loyalty program |
| `bookboost_usage_status` | meta | Usage status (free-tier meter) |
| `bookboost_request_feature` | meta | Request a missing feature |
| `bookboost_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bookboost_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bookboost_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bookboost_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bookboost_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
