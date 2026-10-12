# Adafruit IO MCP by usefulapi

Use [Adafruit IO](https://io.adafruit.com) from Claude, Cursor, or any MCP client — IoT feeds, feed data and charts, groups, dashboards and activity, plus single data-point publishes.
Hosted, no local install: connect with your own Adafruit IO credentials.

**Live endpoint:** `https://adafruit-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/adafruit-io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://adafruit-io.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http adafruit-io https://adafruit-io.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=adafruit-io&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fadafruit-io.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "adafruit-io": {
      "url": "https://adafruit-io.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Adafruit IO credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/adafruit-io/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `adafruitio_get_user` | read | Get user |
| `adafruitio_get_throttle` | read | Get data rate limit |
| `adafruitio_list_feeds` | read | List feeds |
| `adafruitio_get_feed` | read | Get feed |
| `adafruitio_get_feed_details` | read | Get feed details |
| `adafruitio_list_feed_data` | read | List feed data |
| `adafruitio_get_last_data` | read | Get latest data point |
| `adafruitio_get_data_point` | read | Get data point |
| `adafruitio_get_feed_chart` | read | Get feed chart data |
| `adafruitio_list_groups` | read | List groups |
| `adafruitio_get_group` | read | Get group |
| `adafruitio_list_dashboards` | read | List dashboards |
| `adafruitio_get_dashboard` | read | Get dashboard |
| `adafruitio_list_blocks` | read | List dashboard blocks |
| `adafruitio_list_activities` | read | List activity log |
| `adafruitio_publish_data_point` | **write** | Publish data point |
| `adafruitio_create_feed` | **write** | Create feed |
| `adafruitio_usage_status` | meta | Usage status (free-tier meter) |
| `adafruitio_request_feature` | meta | Request a missing feature |
| `adafruitio_upgrade` | meta | Upgrade to Pro (unlimited) |
| `adafruitio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `adafruitio_upgrade` (it returns a Stripe Checkout link). Cancel any time with `adafruitio_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `adafruitio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Adafruit IO.
