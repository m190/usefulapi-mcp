# Shop Boss MCP by usefulapi

Remote MCP endpoint: https://shop-boss.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shop-boss.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shop-boss https://shop-boss.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shop-boss&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshop-boss.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shop-boss": {
      "url": "https://shop-boss.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Shop Boss credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shop-boss/

<!-- connect:end (generated above, edit below) -->

Connect with your Shop Boss credentials using the hosted authorization flow.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shopboss_list_appointments` | read | List appointments |
| `shopboss_list_customers` | read | List customers |
| `shopboss_list_vehicles` | read | List vehicles |
| `shopboss_list_repair_orders` | read | List repair orders |
| `shopboss_list_order_parts` | read | List repair-order parts |
| `shopboss_list_parts` | read | List inventory parts |
| `shopboss_list_part_sales` | read | List part sales |
| `shopboss_list_recommended_repairs` | read | List recommended repairs |
| `shopboss_list_canned_jobs` | read | List canned jobs |
| `shopboss_list_employees` | read | List employee directory |
| `shopboss_list_suppliers` | read | List suppliers |
| `shopboss_list_bays` | read | List service bays |
| `shopboss_list_complaint_categories` | read | List complaint categories |
| `shopboss_list_shop_hours` | read | List shop hours |
| `shopboss_list_sources` | read | List customer sources |
| `shopboss_usage_status` | meta | Usage status (free-tier meter) |
| `shopboss_request_feature` | meta | Request a missing feature |
| `shopboss_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shopboss_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per API key) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shopboss_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shopboss_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shopboss_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

See the repository license.
