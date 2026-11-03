# Janitorial Manager MCP by usefulapi

Use your [Janitorial Manager](https://www.janitorialmanager.com) account from Claude, Cursor, or any MCP client. Read customers, locations, employees, time punches, payroll, quality control inspections, scans, work orders and supply orders. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://janitorial-manager.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://janitorial-manager.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http janitorial-manager https://janitorial-manager.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=janitorial-manager&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjanitorial-manager.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "janitorial-manager": {
      "url": "https://janitorial-manager.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Janitorial Manager credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/janitorial-manager/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Janitorial Manager username**, **password** and **company client secret**. Ask your Janitorial Manager account manager or customer support for the client secret. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `janitorialmanager_list_customers` | read | List customers |
| `janitorialmanager_get_customer` | read | Get a customer |
| `janitorialmanager_list_clients` | read | List clients |
| `janitorialmanager_get_location` | read | Get a location |
| `janitorialmanager_list_properties` | read | List properties |
| `janitorialmanager_list_employees` | read | List employees |
| `janitorialmanager_get_employee` | read | Get an employee |
| `janitorialmanager_list_employee_punches` | read | List employee punches |
| `janitorialmanager_get_payroll` | read | Get payroll |
| `janitorialmanager_list_quality_controls` | read | List quality control inspections |
| `janitorialmanager_get_quality_control` | read | Get a quality control inspection |
| `janitorialmanager_list_areas` | read | List areas |
| `janitorialmanager_list_area_types` | read | List area types |
| `janitorialmanager_list_area_scans` | read | List area scans |
| `janitorialmanager_list_employee_scans` | read | List employee scans |
| `janitorialmanager_list_work_orders` | read | List work orders |
| `janitorialmanager_get_work_order` | read | Get a work order |
| `janitorialmanager_list_supply_orders` | read | List supply orders |
| `janitorialmanager_list_suppliers` | read | List suppliers |
| `janitorialmanager_get_supplier` | read | Get a supplier |
| `janitorialmanager_usage_status` | meta | Usage status (free-tier meter) |
| `janitorialmanager_request_feature` | meta | Request a missing feature |
| `janitorialmanager_upgrade` | meta | Upgrade to Pro or Pro+ |
| `janitorialmanager_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `janitorialmanager_upgrade` (it returns a Stripe Checkout link). Cancel any time with `janitorialmanager_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `janitorialmanager_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
