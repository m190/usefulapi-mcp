# MailReach MCP by usefulapi

Use your [MailReach](https://www.mailreach.co) account from Claude, Cursor, or any MCP client. Read sending domains, email accounts, blacklist hits, spam tests and alerts, and create spam tests. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://mailreach.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mailreach.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mailreach https://mailreach.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mailreach&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmailreach.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mailreach": {
      "url": "https://mailreach.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MailReach credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mailreach/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **MailReach project API key** (Settings in your MailReach project). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mailreach_list_domains` | read | List sending domains |
| `mailreach_get_project_stats` | read | Get project statistics |
| `mailreach_list_accounts` | read | List email accounts |
| `mailreach_get_account` | read | Get an email account |
| `mailreach_get_account_stats` | read | Get account statistics |
| `mailreach_list_account_aliases` | read | List account aliases |
| `mailreach_get_domain_blacklists` | read | Get domain blacklists |
| `mailreach_list_spam_tests` | read | List spam tests |
| `mailreach_get_spam_test` | read | Get a spam test result |
| `mailreach_get_spam_test_blacklists` | read | Get spam test blacklists |
| `mailreach_create_spam_test` | **write** | Create a spam test |
| `mailreach_list_notifications` | read | List open notifications |
| `mailreach_summarize_notifications` | read | Summarize open notifications |
| `mailreach_list_alerts` | read | List alerts |
| `mailreach_list_automated_tests` | read | List automated tests |
| `mailreach_get_automated_test` | read | Get an automated test |
| `mailreach_list_email_workspaces` | read | List email workspaces |
| `mailreach_list_tags` | read | List tags |
| `mailreach_usage_status` | meta | Usage status (free-tier meter) |
| `mailreach_request_feature` | meta | Request a missing feature |
| `mailreach_upgrade` | meta | Upgrade to Pro or Pro+ |
| `mailreach_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `mailreach_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `mailreach_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `mailreach_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
