# Good Grants MCP by usefulapi

Use your [Good Grants](https://www.goodgrants.com) account from Claude, Cursor, or any MCP client. It reads applications, rounds, funds and leaderboards, and with a Read / Write key it also adds and removes application tags. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://good-grants.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://good-grants.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http good-grants https://good-grants.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=good-grants&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgood-grants.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "good-grants": {
      "url": "https://good-grants.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Good Grants credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/good-grants/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Good Grants API key** (created under Settings → Integrations → API Keys) and your **account region**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `goodgrants_get_account` | read | Get account |
| `goodgrants_list_seasons` | read | List seasons |
| `goodgrants_list_chapters` | read | List chapters |
| `goodgrants_list_forms` | read | List forms |
| `goodgrants_get_form` | read | Get form |
| `goodgrants_list_rounds` | read | List rounds |
| `goodgrants_get_round` | read | Get round |
| `goodgrants_list_categories` | read | List categories |
| `goodgrants_list_applications` | read | List applications |
| `goodgrants_get_application` | read | Get application |
| `goodgrants_list_assignments` | read | List assignments |
| `goodgrants_list_score_sets` | read | List score sets |
| `goodgrants_list_leaderboard` | read | List leaderboard results |
| `goodgrants_list_funds` | read | List funds |
| `goodgrants_get_fund` | read | Get fund |
| `goodgrants_list_allocations` | read | List allocations |
| `goodgrants_list_allocation_payments` | read | List allocation payments |
| `goodgrants_list_users` | read | List users |
| `goodgrants_tag_application` | **write** | Tag application |
| `goodgrants_untag_application` | **write** | Untag application |
| `goodgrants_usage_status` | meta | Usage status (free-tier meter) |
| `goodgrants_request_feature` | meta | Request a missing feature |
| `goodgrants_upgrade` | meta | Upgrade to Pro or Pro+ |
| `goodgrants_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `goodgrants_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `goodgrants_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `goodgrants_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
