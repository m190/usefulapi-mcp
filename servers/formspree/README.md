# Formspree MCP by usefulapi

Hosted at https://formspree.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://formspree.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http formspree https://formspree.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=formspree&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fformspree.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "formspree": {
      "url": "https://formspree.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Formspree credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/formspree/

<!-- connect:end (generated above, edit below) -->

Connect your Formspree account using the credentials described on the login page.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `formspree_list_submissions` | read | List submissions |
| `formspree_list_spam_submissions` | read | List spam submissions |
| `formspree_get_form_fields` | read | Get form fields |
| `formspree_usage_status` | meta | Usage status (free-tier meter) |
| `formspree_request_feature` | meta | Request a missing feature |
| `formspree_upgrade` | meta | Upgrade to Pro or Pro+ |
| `formspree_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per form) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per form) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `formspree_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `formspree_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `formspree_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
