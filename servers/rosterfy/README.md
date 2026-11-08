# Rosterfy MCP by usefulapi

Use your [Rosterfy](https://rosterfy.com) account from Claude, Cursor, or any MCP client. Read people, events, shifts, training, certificates and reward points, and assign or remove people on shifts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rosterfy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rosterfy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rosterfy https://rosterfy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rosterfy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frosterfy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rosterfy": {
      "url": "https://rosterfy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rosterfy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rosterfy/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **account name** (`acme` for acme.rosterfy.com), a **client id** and **client secret** of a personal access client, and the **email** and **password** of a dedicated integration user. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rosterfy_get_current_user` | read | Get the current user |
| `rosterfy_list_users` | read | List users |
| `rosterfy_get_user` | read | Get a user |
| `rosterfy_list_events` | read | List events |
| `rosterfy_get_event` | read | Get an event |
| `rosterfy_list_shift_assignments` | read | List shift assignments |
| `rosterfy_get_shift_assignment` | read | Get a shift assignment |
| `rosterfy_list_training_modules` | read | List training modules |
| `rosterfy_list_training_assignments` | read | List training assignments |
| `rosterfy_list_certificate_holders` | read | List certificate holders |
| `rosterfy_get_reward_balance` | read | Get a reward point balance |
| `rosterfy_list_reports` | read | List reports |
| `rosterfy_get_report` | read | Get a report |
| `rosterfy_assign_user_to_shift` | **write** | Assign a user to a shift |
| `rosterfy_remove_user_from_shift` | **write** | Remove a user from a shift |
| `rosterfy_usage_status` | meta | Usage status (free-tier meter) |
| `rosterfy_request_feature` | meta | Request a missing feature |
| `rosterfy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rosterfy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `rosterfy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `rosterfy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `rosterfy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
