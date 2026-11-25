# HelpSpot MCP by usefulapi

Use your [HelpSpot](https://www.helpspot.com) account from Claude, Cursor, or any MCP client. It reads and searches requests, and creates requests or adds notes and assignments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://helpspot.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://helpspot.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http helpspot https://helpspot.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=helpspot&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhelpspot.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "helpspot": {
      "url": "https://helpspot.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your HelpSpot credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/helpspot/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **HelpSpot site** (the `yourname` part of `yourname.helpspot.com`) and a **staff API token** (under your staff profile, API keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `helpspot_get_request` | read | Get a request |
| `helpspot_get_requests` | read | Get several requests |
| `helpspot_search_requests` | read | Search requests |
| `helpspot_get_filter_requests` | read | List requests in a filter |
| `helpspot_list_filters` | read | List filters |
| `helpspot_list_categories` | read | List categories |
| `helpspot_list_status_types` | read | List status types |
| `helpspot_list_staff` | read | List active staff |
| `helpspot_get_my_preferences` | read | Show my profile |
| `helpspot_list_canned_responses` | read | List canned responses |
| `helpspot_create_request` | **write** | Create a request |
| `helpspot_update_request` | **write** | Update a request |
| `helpspot_usage_status` | meta | Usage status (free-tier meter) |
| `helpspot_request_feature` | meta | Request a missing feature |
| `helpspot_upgrade` | meta | Upgrade to Pro or Pro+ |
| `helpspot_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `helpspot_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `helpspot_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `helpspot_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
