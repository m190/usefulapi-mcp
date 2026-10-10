# Encharge MCP by usefulapi

Use [Encharge](https://encharge.io) from Claude, Cursor, or any MCP client — people, tags, segments, fields and events.
Hosted, no local install: connect with your own Encharge credentials.

**Live endpoint:** `https://encharge.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/encharge

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://encharge.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http encharge https://encharge.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=encharge&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fencharge.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "encharge": {
      "url": "https://encharge.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Encharge credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/encharge/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `encharge_get_account` | read | Get account |
| `encharge_get_people` | read | Get people |
| `encharge_list_segment_people` | read | List people in a segment |
| `encharge_upsert_person` | **write** | Create or update a person |
| `encharge_unsubscribe_person` | **write** | Unsubscribe a person |
| `encharge_add_tags` | **write** | Add tags to a person |
| `encharge_remove_tags` | **write** | Remove tags from a person |
| `encharge_list_segments` | read | List segments |
| `encharge_list_fields` | read | List person fields |
| `encharge_track_event` | **write** | Track an event |
| `encharge_usage_status` | meta | Usage status (free-tier meter) |
| `encharge_request_feature` | meta | Request a missing feature |
| `encharge_upgrade` | meta | Upgrade to Pro (unlimited) |
| `encharge_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `encharge_upgrade` (it returns a Stripe Checkout link). Cancel any time with `encharge_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `encharge_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Encharge.
