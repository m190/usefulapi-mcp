# ManyChat MCP by usefulapi

Use your [ManyChat](https://manychat.com) account from Claude, Cursor, or any MCP client. Read subscribers, tags and flows, change tags and custom fields, and start flows you built. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://manychat.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://manychat.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http manychat https://manychat.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=manychat&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmanychat.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "manychat": {
      "url": "https://manychat.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ManyChat credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/manychat/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ManyChat Account Public API key**, which you find under Settings → API. API access needs a ManyChat plan that includes it. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `manychat_get_page_info` | read | Get page info |
| `manychat_list_tags` | read | List tags |
| `manychat_list_custom_fields` | read | List custom fields |
| `manychat_list_flows` | read | List flows |
| `manychat_list_bot_fields` | read | List bot fields |
| `manychat_get_subscriber` | read | Get a subscriber |
| `manychat_get_subscriber_by_user_ref` | read | Get a subscriber by user ref |
| `manychat_find_subscribers_by_name` | read | Find subscribers by name |
| `manychat_find_subscribers_by_custom_field` | read | Find subscribers by custom field |
| `manychat_find_subscriber_by_system_field` | read | Find a subscriber by email or phone |
| `manychat_create_tag` | **write** | Create a tag |
| `manychat_add_tag_to_subscriber` | **write** | Add a tag to a subscriber |
| `manychat_remove_tag_from_subscriber` | **write** | Remove a tag from a subscriber |
| `manychat_set_custom_field` | **write** | Set a custom field |
| `manychat_send_flow` | **write** | Start a flow for a subscriber |
| `manychat_usage_status` | meta | Usage status (free-tier meter) |
| `manychat_request_feature` | meta | Request a missing feature |
| `manychat_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `manychat_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `manychat_upgrade` (it returns a Stripe Checkout link). Cancel any time with `manychat_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `manychat_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
