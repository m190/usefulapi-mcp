# NewsMAN MCP by usefulapi

**Live endpoint:** `https://newsman.usefulapi.io/mcp`

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://newsman.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http newsman https://newsman.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=newsman&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnewsman.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "newsman": {
      "url": "https://newsman.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your NewsMAN credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/newsman/

<!-- connect:end (generated above, edit below) -->

On first connect you will paste your **NewsMAN Authorization token**. It is validated, stored per-user, and scoped to you. No keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `newsman_list_lists` | read | List subscriber lists |
| `newsman_get_list` | read | Get list properties |
| `newsman_count_list_subscribers` | read | Count list subscribers |
| `newsman_list_subscribers` | read | List subscribers by status |
| `newsman_get_list_growth` | read | Get list growth |
| `newsman_search_subscribers` | read | Search subscribers |
| `newsman_get_subscriber` | read | Get subscriber by email |
| `newsman_get_subscriber_by_id` | read | Get subscriber by id |
| `newsman_get_subscriber_history` | read | Get subscriber history |
| `newsman_list_segments` | read | List segments |
| `newsman_count_segment_subscribers` | read | Count segment subscribers |
| `newsman_list_segment_subscribers` | read | List segment subscribers |
| `newsman_list_newsletters` | read | List newsletters |
| `newsman_get_newsletter` | read | Get newsletter |
| `newsman_get_newsletter_stats` | read | Get newsletter stats |
| `newsman_get_newsletter_clicked_links` | read | Get newsletter clicked links |
| `newsman_list_automations` | read | List automations |
| `newsman_get_automation` | read | Get automation |
| `newsman_get_automation_stats` | read | Get automation stats |
| `newsman_get_import_status` | read | Get import status |
| `newsman_subscribe_email` | **write** | Subscribe an email |
| `newsman_unsubscribe_email` | **write** | Unsubscribe an email |
| `newsman_update_subscriber` | **write** | Update a subscriber |
| `newsman_add_subscriber_tags` | **write** | Add tags to a subscriber |
| `newsman_add_subscriber_to_segment` | **write** | Add a subscriber to a segment |
| `newsman_remove_subscriber_from_segment` | **write** | Remove a subscriber from a segment |
| `newsman_usage_status` | meta | Usage status (free-tier meter) |
| `newsman_request_feature` | meta | Request a missing feature |
| `newsman_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `newsman_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `newsman_upgrade` (it returns a Stripe Checkout link). Cancel any time with `newsman_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `newsman_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
