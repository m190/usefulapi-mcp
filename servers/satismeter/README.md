# SatisMeter MCP by usefulapi

Use your [SatisMeter](https://www.satismeter.com) account from Claude, Cursor, or any MCP client. Read surveys, survey statistics and responses for one project, without changes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://satismeter.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://satismeter.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http satismeter https://satismeter.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=satismeter&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsatismeter.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "satismeter": {
      "url": "https://satismeter.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SatisMeter credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/satismeter/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **SatisMeter project API key** and your **SatisMeter Project ID** (Settings → Integrations → API). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `satismeter_get_project` | read | Get project |
| `satismeter_list_surveys` | read | List surveys |
| `satismeter_get_survey` | read | Get survey |
| `satismeter_list_responses` | read | List responses (all surveys) |
| `satismeter_list_survey_responses` | read | List responses (one survey) |
| `satismeter_get_survey_statistics` | read | Get survey statistics |
| `satismeter_usage_status` | meta | Usage status (free-tier meter) |
| `satismeter_request_feature` | meta | Request a missing feature |
| `satismeter_upgrade` | meta | Upgrade to Pro or Pro+ |
| `satismeter_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `satismeter_upgrade` (it returns a Stripe Checkout link). Cancel any time with `satismeter_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `satismeter_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
