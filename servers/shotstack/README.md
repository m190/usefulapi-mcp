# Shotstack MCP by usefulapi

Use your [Shotstack](https://shotstack.io) account from Claude, Cursor, or any MCP client. Render videos from a JSON timeline, manage saved templates, inspect media files and quote AI generation prices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://shotstack.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://shotstack.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http shotstack https://shotstack.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=shotstack&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshotstack.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "shotstack": {
      "url": "https://shotstack.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Shotstack credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/shotstack/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Shotstack API key** (app.shotstack.io → API keys) and its **environment** (stage for the sandbox, v1 for production). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shotstack_render_video` | **write** | Render a video |
| `shotstack_get_render` | read | Get a render |
| `shotstack_list_templates` | read | List templates |
| `shotstack_get_template` | read | Get a template |
| `shotstack_create_template` | **write** | Create a template |
| `shotstack_update_template` | **write** | Update a template |
| `shotstack_delete_template` | **write** | Delete a template |
| `shotstack_render_template` | **write** | Render a template |
| `shotstack_probe_media` | read | Inspect a media file |
| `shotstack_list_models` | read | List AI models |
| `shotstack_get_model` | read | Get an AI model |
| `shotstack_quote_generation` | read | Quote an AI generation |
| `shotstack_usage_status` | meta | Usage status (free-tier meter) |
| `shotstack_request_feature` | meta | Request a missing feature |
| `shotstack_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shotstack_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shotstack_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shotstack_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shotstack_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
