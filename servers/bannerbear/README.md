# Bannerbear MCP by usefulapi

Generate branded images, videos, and screenshots from your Bannerbear templates from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Bannerbear API key.

**Live endpoint:** `https://bannerbear.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bannerbear

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bannerbear.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bannerbear https://bannerbear.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bannerbear&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbannerbear.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bannerbear": {
      "url": "https://bannerbear.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bannerbear/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Bannerbear API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bannerbear_get_account` | read | Get account |
| `bannerbear_list_templates` | read | List templates |
| `bannerbear_get_template` | read | Get template |
| `bannerbear_list_template_sets` | read | List template sets |
| `bannerbear_get_template_set` | read | Get template set |
| `bannerbear_list_images` | read | List images |
| `bannerbear_get_image` | read | Get image |
| `bannerbear_get_video` | read | Get video |
| `bannerbear_get_collection` | read | Get collection |
| `bannerbear_list_fonts` | read | List fonts |
| `bannerbear_list_effects` | read | List effects |
| `bannerbear_create_image` | **write** | Create image |
| `bannerbear_create_collection` | **write** | Create collection |
| `bannerbear_create_screenshot` | **write** | Create screenshot |
| `bannerbear_create_video` | **write** | Create video |
| `bannerbear_usage_status` | meta | Usage status (free-tier meter) |
| `bannerbear_upgrade` | meta | Upgrade to Pro (unlimited) |
| `bannerbear_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `bannerbear_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bannerbear_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bannerbear_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
