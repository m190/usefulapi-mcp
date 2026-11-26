# Survicate MCP by usefulapi

Use your [Survicate](https://survicate.com) account from Claude, Cursor, or any MCP client. Read surveys, questions, responses and respondent attributes, all read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://survicate.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://survicate.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http survicate https://survicate.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=survicate&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsurvicate.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "survicate": {
      "url": "https://survicate.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Survicate credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/survicate/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Survicate Data Export API key** (Settings → Organization → Access Keys; owners and workspace admins only). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `survicate_list_surveys` | read | List surveys |
| `survicate_get_survey` | read | Get a survey |
| `survicate_list_questions` | read | List survey questions |
| `survicate_list_responses` | read | List survey responses |
| `survicate_get_response` | read | Get a survey response |
| `survicate_list_respondent_responses` | read | List a respondent's responses |
| `survicate_list_respondent_attributes` | read | List a respondent's attributes |
| `survicate_usage_status` | meta | Usage status (free-tier meter) |
| `survicate_request_feature` | meta | Request a missing feature |
| `survicate_upgrade` | meta | Upgrade to Pro or Pro+ |
| `survicate_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `survicate_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `survicate_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `survicate_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
