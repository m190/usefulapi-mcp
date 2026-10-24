# Schedule it MCP by usefulapi

Read Schedule it events, resources, groups and labels; create and update events and resources.

**Live endpoint:** `https://schedule-it.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/schedule-it

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://schedule-it.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http schedule-it https://schedule-it.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=schedule-it&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fschedule-it.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "schedule-it": {
      "url": "https://schedule-it.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Schedule it credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/schedule-it/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your Schedule it **account number**, login name and **password** (the API user name is `<account number>_<login name>`, shown in your Schedule it account settings).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `scheduleit_list_events` | read | List events |
| `scheduleit_get_event` | read | Get event |
| `scheduleit_create_event` | **write** | Create event |
| `scheduleit_update_event` | **write** | Update event |
| `scheduleit_delete_event` | **write** | Delete event |
| `scheduleit_list_resources` | read | List resources |
| `scheduleit_get_resource` | read | Get resource |
| `scheduleit_create_resource` | **write** | Create resource |
| `scheduleit_update_resource` | **write** | Update resource |
| `scheduleit_list_groups` | read | List groups |
| `scheduleit_get_group` | read | Get group |
| `scheduleit_create_group` | **write** | Create group |
| `scheduleit_update_group` | **write** | Update group |
| `scheduleit_list_labels` | read | List labels |
| `scheduleit_list_label_groups` | read | List label groups |
| `scheduleit_usage_status` | meta | Usage status (free-tier meter) |
| `scheduleit_request_feature` | meta | Request a missing feature |
| `scheduleit_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `scheduleit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `scheduleit_upgrade` (it returns a Stripe Checkout link). Cancel any time with `scheduleit_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `scheduleit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Schedule it.
