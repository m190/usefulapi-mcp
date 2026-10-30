# Jackrabbit Class MCP by usefulapi

Connect the Jackrabbit Class Customer API beta to your AI assistant.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://jackrabbit-class.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http jackrabbit-class https://jackrabbit-class.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=jackrabbit-class&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjackrabbit-class.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "jackrabbit-class": {
      "url": "https://jackrabbit-class.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Jackrabbit Class credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/jackrabbit-class/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `jackrabbit_get_organization` | read | Get organization |
| `jackrabbit_get_custom_field_labels` | read | Get custom field labels |
| `jackrabbit_list_options` | read | List option values |
| `jackrabbit_list_families` | read | List families |
| `jackrabbit_get_family` | read | Get family |
| `jackrabbit_list_archived_families` | read | List archived families |
| `jackrabbit_list_contacts` | read | List contacts |
| `jackrabbit_get_contact` | read | Get contact |
| `jackrabbit_list_authorized_contacts` | read | List contacts authorized to pick up a student |
| `jackrabbit_list_students` | read | List students |
| `jackrabbit_get_student` | read | Get student |
| `jackrabbit_list_staff` | read | List staff |
| `jackrabbit_get_staff_member` | read | Get staff member |
| `jackrabbit_list_classes` | read | List classes |
| `jackrabbit_get_class` | read | Get class |
| `jackrabbit_get_class_roster` | read | Get class roster |
| `jackrabbit_list_class_listings` | read | List class listings (openings) |
| `jackrabbit_list_enrollments` | read | List enrollments |
| `jackrabbit_get_enrollment` | read | Get enrollment |
| `jackrabbit_list_attendance` | read | List attendance |
| `jackrabbit_list_waitlist_entries` | read | List waitlist entries |
| `jackrabbit_get_franchise_revenue_summary` | read | Get franchise revenue summary |
| `jackrabbit_create_student` | **write** | Create student |
| `jackrabbit_create_waitlist_entry` | **write** | Add student to a class waitlist |
| `jackrabbit_usage_status` | meta | Usage status (free-tier meter) |
| `jackrabbit_request_feature` | meta | Request a missing feature |
| `jackrabbit_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `jackrabbit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API token and organization) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `jackrabbit_upgrade` (it returns a Stripe Checkout link). Cancel any time with `jackrabbit_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `jackrabbit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
