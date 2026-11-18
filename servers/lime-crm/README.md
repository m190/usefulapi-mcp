# Lime CRM MCP by usefulapi

Use your [Lime CRM](https://www.lime-crm.com) account from Claude, Cursor, or any MCP client. It reads limetypes, objects and users, runs queries, and creates objects. It has no delete tool. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://lime-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lime-crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lime-crm https://lime-crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lime-crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flime-crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lime-crm": {
      "url": "https://lime-crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Lime CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lime-crm/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Lime CRM server address** (for example https://yourcompany.lime-crm.com), the **application name** (the path part after the server in your Lime CRM URL, for example Lime CRM) and an **API key** of an API user (LISA → Databases → Security → Users → Create API key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `limecrm_list_limetypes` | read | List limetypes |
| `limecrm_get_limetype` | read | Get a limetype |
| `limecrm_get_limeobject` | read | Get an object |
| `limecrm_query_limeobjects` | read | Query objects |
| `limecrm_list_users` | read | List users |
| `limecrm_create_limeobject` | **write** | Create an object |
| `limecrm_usage_status` | meta | Usage status (free-tier meter) |
| `limecrm_request_feature` | meta | Request a missing feature |
| `limecrm_upgrade` | meta | Upgrade to Pro or Pro+ |
| `limecrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `limecrm_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `limecrm_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `limecrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
