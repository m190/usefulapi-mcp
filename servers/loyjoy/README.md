# LoyJoy MCP by usefulapi

Use your [LoyJoy](https://www.loyjoy.com) account from Claude, Cursor, or any MCP client. Read agents, home views, knowledge catalogs and articles, search the knowledge base, create catalogs and articles, and ask a published agent a question. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://loyjoy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://loyjoy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http loyjoy https://loyjoy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=loyjoy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Floyjoy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "loyjoy": {
      "url": "https://loyjoy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your LoyJoy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/loyjoy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **LoyJoy API token**, created in cloud.loyjoy.com under tenant settings, tab API. The token is tied to your LoyJoy user, so removing that user from the tenant revokes it. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `loyjoy_list_agents` | read | List agents |
| `loyjoy_get_agent` | read | Get agent |
| `loyjoy_start_agent` | **write** | Start agent |
| `loyjoy_ask_agent` | **write** | Ask agent |
| `loyjoy_list_home_views` | read | List home views |
| `loyjoy_get_home_view` | read | Get home view |
| `loyjoy_list_catalogs` | read | List knowledge catalogs |
| `loyjoy_get_catalog` | read | Get knowledge catalog |
| `loyjoy_list_articles` | read | List articles |
| `loyjoy_get_article` | read | Get article |
| `loyjoy_list_knowledge_sources` | read | List knowledge sources |
| `loyjoy_search_knowledge` | read | Search knowledge |
| `loyjoy_create_catalog` | **write** | Create knowledge catalog |
| `loyjoy_create_article` | **write** | Create article |
| `loyjoy_usage_status` | meta | Usage status (free-tier meter) |
| `loyjoy_request_feature` | meta | Request a missing feature |
| `loyjoy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `loyjoy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `loyjoy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `loyjoy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `loyjoy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
