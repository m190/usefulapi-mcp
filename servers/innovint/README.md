# InnoVint MCP by usefulapi

Hosted at https://innovint.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://innovint.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http innovint https://innovint.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=innovint&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finnovint.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "innovint": {
      "url": "https://innovint.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your InnoVint credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/innovint/

<!-- connect:end (generated above, edit below) -->

Create a personal access token in InnoVint under **Developer → Personal Access Tokens**. Each hosted connection is limited to one verified winery, with usage and billing per winery. Enter its Winery ID, or leave that field blank only when the token accesses exactly one winery.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `innovint_list_wineries` | read | List wineries |
| `innovint_get_winery` | read | Get winery |
| `innovint_list_lots` | read | List lots |
| `innovint_get_lot` | read | Get lot |
| `innovint_get_lot_composition` | read | Get lot composition |
| `innovint_get_lot_components_summary` | read | Get lot components summary |
| `innovint_list_lot_analyses` | read | List lot analyses |
| `innovint_list_lot_additives` | read | List lot additives |
| `innovint_list_lot_costs` | read | List lot costs |
| `innovint_list_vessels` | read | List vessels |
| `innovint_list_vessels_at_point_in_time` | read | List vessels at a point in time |
| `innovint_list_actions` | read | List actions (work history) |
| `innovint_list_analysis_actions` | read | List analysis actions |
| `innovint_list_addition_actions` | read | List addition actions |
| `innovint_list_transfer_actions` | read | List transfer actions |
| `innovint_list_adjustment_actions` | read | List adjustment actions |
| `innovint_list_receive_fruit_actions` | read | List fruit receiving actions |
| `innovint_list_analysis_types` | read | List analysis types |
| `innovint_list_additives` | read | List additives |
| `innovint_list_vineyards` | read | List vineyards |
| `innovint_list_blocks` | read | List vineyard blocks |
| `innovint_list_growers` | read | List growers |
| `innovint_list_grower_receipts` | read | List grower receipts for a vintage |
| `innovint_list_vendors` | read | List vendors |
| `innovint_list_bonds` | read | List bonds |
| `innovint_create_analysis_action` | **write** | Record analysis results |
| `innovint_create_vendor` | **write** | Create vendor |
| `innovint_usage_status` | meta | Usage status (free-tier meter) |
| `innovint_request_feature` | meta | Request a missing feature |
| `innovint_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `innovint_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per connected winery) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `innovint_upgrade` (it returns a Stripe Checkout link). Cancel any time with `innovint_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `innovint_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
