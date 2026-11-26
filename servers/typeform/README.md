# Typeform MCP by usefulapi

Use your [Typeform](https://www.typeform.com) account from Claude, Cursor, or any MCP client. Read forms, responses, themes, images and webhooks, and create forms or set webhooks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://typeform.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://typeform.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http typeform https://typeform.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=typeform&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftypeform.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "typeform": {
      "url": "https://typeform.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Typeform credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/typeform/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Typeform personal access token** (tfp_…, from Account → Personal tokens) and your **account region**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `typeform_list_workspaces` | read | List workspaces |
| `typeform_get_workspace` | read | Get workspace |
| `typeform_list_forms` | read | List forms |
| `typeform_get_form` | read | Get form |
| `typeform_create_form` | **write** | Create form |
| `typeform_list_responses` | read | List responses |
| `typeform_search_responses` | read | Search responses |
| `typeform_list_themes` | read | List themes |
| `typeform_get_theme` | read | Get theme |
| `typeform_list_images` | read | List images |
| `typeform_get_image` | read | Get image |
| `typeform_list_webhooks` | read | List webhooks |
| `typeform_get_webhook` | read | Get webhook |
| `typeform_set_webhook` | **write** | Create or update webhook |
| `typeform_usage_status` | meta | Usage status (free-tier meter) |
| `typeform_request_feature` | meta | Request a missing feature |
| `typeform_upgrade` | meta | Upgrade to Pro or Pro+ |
| `typeform_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `typeform_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `typeform_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `typeform_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
