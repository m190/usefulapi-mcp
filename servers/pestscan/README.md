# PestScan MCP by usefulapi

Use your PestScan account from Claude, Cursor, or any MCP client. Read customers, locations, orders, appointments, infestations, bait stations and materials used. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pestscan.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pestscan.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pestscan https://pestscan.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pestscan&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpestscan.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pestscan": {
      "url": "https://pestscan.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PestScan credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pestscan/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **PestScan appCustomerId**, **API username** and **API password** (from your PestScan account manager or support; the user needs the ApiUser role). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pestscan_test_connection` | read | Test connection |
| `pestscan_list_customers` | read | List customers |
| `pestscan_list_locations` | read | List locations |
| `pestscan_get_location` | read | Get location |
| `pestscan_list_orders` | read | List orders |
| `pestscan_list_new_orders` | read | List new orders |
| `pestscan_list_completed_orders` | read | List completed orders |
| `pestscan_list_appointments` | read | List appointments |
| `pestscan_list_infestations` | read | List infestations |
| `pestscan_list_bait_stations` | read | List bait stations |
| `pestscan_list_recommendations` | read | List recommendations |
| `pestscan_list_consumption` | read | List material consumption |
| `pestscan_list_employees` | read | List employees |
| `pestscan_list_articles` | read | List articles |
| `pestscan_list_visit_types` | read | List visit types |
| `pestscan_usage_status` | meta | Usage status (free-tier meter) |
| `pestscan_request_feature` | meta | Request a missing feature |
| `pestscan_upgrade` | meta | Upgrade to Pro or Pro+ |
| `pestscan_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `pestscan_upgrade` (it returns a Stripe Checkout link). Cancel any time with `pestscan_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `pestscan_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
