# CallHippo MCP by usefulapi

Use your [CallHippo](https://callhippo.com) account from Claude, Cursor, or any MCP client. It reads users, teams, contacts, call and SMS logs and campaigns. It also changes contacts and the Do Not Call list, places calls and starts or stops campaigns. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://callhippo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://callhippo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http callhippo https://callhippo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=callhippo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcallhippo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "callhippo": {
      "url": "https://callhippo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CallHippo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/callhippo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **CallHippo REST API key**, created in CallHippo under **Integration → REST API** with the **+** button. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `callhippo_list_users` | read | List users |
| `callhippo_get_user` | read | Get a user |
| `callhippo_list_teams` | read | List teams |
| `callhippo_list_contacts` | read | List contacts of a user |
| `callhippo_add_contact` | **write** | Add a contact |
| `callhippo_update_contact` | **write** | Update a contact |
| `callhippo_delete_contact` | **write** | Delete a contact |
| `callhippo_add_dnc_number` | **write** | Add a number to the Do Not Call list |
| `callhippo_remove_dnc_number` | **write** | Remove a number from the Do Not Call list |
| `callhippo_list_call_logs` | read | List call logs |
| `callhippo_list_sms_logs` | read | List SMS logs |
| `callhippo_make_call` | **write** | Place a call |
| `callhippo_list_campaigns` | read | List campaigns |
| `callhippo_get_campaign` | read | Get a campaign |
| `callhippo_set_campaign_status` | **write** | Start or stop a campaign |
| `callhippo_usage_status` | meta | Usage status (free-tier meter) |
| `callhippo_request_feature` | meta | Request a missing feature |
| `callhippo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `callhippo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `callhippo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `callhippo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `callhippo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
