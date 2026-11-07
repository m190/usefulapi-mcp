# Temp Stick MCP by usefulapi

Use your [Temp Stick](https://tempstick.com) account from Claude, Cursor, or any MCP client. Read temperature and humidity sensors, their readings and alert notifications. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://temp-stick.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://temp-stick.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http temp-stick https://temp-stick.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=temp-stick&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftemp-stick.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "temp-stick": {
      "url": "https://temp-stick.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Temp Stick credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/temp-stick/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Temp Stick API key** (Account Page, Developers tab, Show Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tempstick_list_sensors` | read | List sensors |
| `tempstick_get_sensor` | read | Get a sensor |
| `tempstick_get_readings` | read | Get sensor readings |
| `tempstick_list_alerts` | read | List alert notifications |
| `tempstick_usage_status` | meta | Usage status (free-tier meter) |
| `tempstick_request_feature` | meta | Request a missing feature |
| `tempstick_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tempstick_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `tempstick_upgrade` (it returns a Stripe Checkout link). Cancel any time with `tempstick_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `tempstick_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
