# StatusCast MCP by usefulapi

Use your [StatusCast](https://www.statuscast.com) account from Claude, Cursor, or any MCP client. Read page status, components, uptime, incidents and content templates. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://statuscast.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://statuscast.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http statuscast https://statuscast.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=statuscast&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstatuscast.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "statuscast": {
      "url": "https://statuscast.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your StatusCast credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/statuscast/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **StatusCast domain** and a **StatusCast API token** (StatusCast → Settings → Integrations → Generate New Token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `statuscast_get_page_status` | read | Get page status |
| `statuscast_get_page` | read | Get page details |
| `statuscast_list_components` | read | List components |
| `statuscast_search_components` | read | Search components |
| `statuscast_get_component` | read | Get component |
| `statuscast_get_component_uptime` | read | Get component uptime |
| `statuscast_search_incidents` | read | Search incidents |
| `statuscast_get_incident` | read | Get incident |
| `statuscast_list_group_incidents` | read | List group incidents |
| `statuscast_list_content_templates` | read | List content templates |
| `statuscast_usage_status` | meta | Usage status (free-tier meter) |
| `statuscast_request_feature` | meta | Request a missing feature |
| `statuscast_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `statuscast_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `statuscast_upgrade` (it returns a Stripe Checkout link). Cancel any time with `statuscast_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `statuscast_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
