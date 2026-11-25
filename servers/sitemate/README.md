# Sitemate MCP by usefulapi

Use your [Sitemate](https://www.sitemate.com) account from Claude, Cursor, or any MCP client. It reads the assets, issues, work orders, inspections, schedules and other records of a Gearbelt workspace. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sitemate.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sitemate.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sitemate https://sitemate.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sitemate&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsitemate.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sitemate": {
      "url": "https://sitemate.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sitemate credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sitemate/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Client ID** and a **Client secret** (Flowsite → Settings → Developer), and your **Gearbelt workspace id**. The server validates the login and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sitemate_list_assets` | read | List Gearbelt assets |
| `sitemate_list_issues` | read | List Gearbelt issues |
| `sitemate_list_work_orders` | read | List Gearbelt work orders |
| `sitemate_list_inspections` | read | List Gearbelt inspections |
| `sitemate_list_repairs` | read | List Gearbelt repairs |
| `sitemate_list_documents` | read | List Gearbelt documents |
| `sitemate_list_schedules` | read | List Gearbelt schedules |
| `sitemate_list_schedule_checks` | read | List Gearbelt schedule checks |
| `sitemate_list_schedule_records` | read | List Gearbelt schedule records |
| `sitemate_list_locations` | read | List Gearbelt locations |
| `sitemate_list_forms` | read | List Gearbelt forms |
| `sitemate_list_users` | read | List Gearbelt users |
| `sitemate_list_categories` | read | List Gearbelt categories |
| `sitemate_list_tags` | read | List Gearbelt tags |
| `sitemate_list_manufacturers` | read | List Gearbelt manufacturers |
| `sitemate_list_units` | read | List Gearbelt units |
| `sitemate_list_unit_readings` | read | List Gearbelt unit readings |
| `sitemate_list_location_logs` | read | List Gearbelt location logs |
| `sitemate_list_lists` | read | List Gearbelt lists |
| `sitemate_get_asset` | read | Get a Gearbelt asset |
| `sitemate_get_issue` | read | Get a Gearbelt issue |
| `sitemate_get_work_order` | read | Get a Gearbelt work order |
| `sitemate_get_inspection` | read | Get a Gearbelt inspection |
| `sitemate_get_repair` | read | Get a Gearbelt repair |
| `sitemate_get_document` | read | Get a Gearbelt document |
| `sitemate_get_schedule` | read | Get a Gearbelt schedule |
| `sitemate_get_schedule_check` | read | Get a Gearbelt schedule check |
| `sitemate_get_location` | read | Get a Gearbelt location |
| `sitemate_get_form` | read | Get a Gearbelt form |
| `sitemate_resolve_qr_code` | read | Resolve a Gearbelt QR code |
| `sitemate_usage_status` | meta | Usage status (free-tier meter) |
| `sitemate_request_feature` | meta | Request a missing feature |
| `sitemate_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sitemate_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sitemate_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sitemate_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sitemate_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
