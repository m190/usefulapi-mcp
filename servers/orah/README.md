# Orah MCP by usefulapi

Use your [Orah](https://www.orah.com) account from Claude, Cursor, or any MCP client. It reads students, rolls, attendance, locations and staff, and it creates or updates students, contacts and houses. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://orah.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://orah.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http orah https://orah.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=orah&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Forah.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "orah": {
      "url": "https://orah.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Orah credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/orah/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the school's **Orah Open API key** and the **region** where the school's Orah is hosted. A school administrator creates the key under **Admin Console → Settings → Open API** and leaves the IP whitelist empty. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `orah_list_students` | read | List students |
| `orah_get_student` | read | Get student |
| `orah_list_houses` | read | List houses |
| `orah_list_student_contacts` | read | List student contacts |
| `orah_list_groups` | read | List groups |
| `orah_list_reason_codes` | read | List reason codes |
| `orah_list_locations` | read | List locations |
| `orah_list_current_locations` | read | List current student locations |
| `orah_list_location_records` | read | List location record history |
| `orah_list_pastoral` | read | List pastoral records |
| `orah_list_roll_types` | read | List roll types |
| `orah_list_rolls` | read | List rolls |
| `orah_get_roll` | read | Get roll |
| `orah_list_daily_attendance` | read | List daily attendance |
| `orah_list_scheduled_classes` | read | List scheduled classes |
| `orah_list_staff` | read | List staff |
| `orah_get_staff` | read | Get staff member |
| `orah_list_leave_types` | read | List leave types |
| `orah_get_leave` | read | Get leave |
| `orah_create_student` | **write** | Create student |
| `orah_update_student` | **write** | Update student |
| `orah_create_contact` | **write** | Create contact |
| `orah_update_contact` | **write** | Update contact |
| `orah_create_house` | **write** | Create house |
| `orah_update_house` | **write** | Update house |
| `orah_usage_status` | meta | Usage status (free-tier meter) |
| `orah_request_feature` | meta | Request a missing feature |
| `orah_upgrade` | meta | Upgrade to Pro or Pro+ |
| `orah_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `orah_upgrade` (it returns a Stripe Checkout link). Cancel any time with `orah_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `orah_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
