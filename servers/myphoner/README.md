# myPhoner MCP by usefulapi

Work myPhoner calling lists and leads: search, log call outcomes, add, update and assign leads.

**Live endpoint:** `https://myphoner.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/myphoner

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://myphoner.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http myphoner https://myphoner.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=myphoner&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmyphoner.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "myphoner": {
      "url": "https://myphoner.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your myPhoner credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/myphoner/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your myPhoner **subdomain** (acme for acme.myphoner.com) and **API key**.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `myphoner_list_lists` | read | List calling lists |
| `myphoner_get_list` | read | Get a calling list |
| `myphoner_list_columns` | read | List the fields of a list |
| `myphoner_get_list_stats` | read | Get list statistics |
| `myphoner_create_list` | **write** | Create a calling list |
| `myphoner_list_leads` | read | List the leads in a list |
| `myphoner_get_lead` | read | Get a lead |
| `myphoner_find_leads` | read | Find leads by field |
| `myphoner_search_leads` | read | Search leads |
| `myphoner_create_lead` | **write** | Create a lead |
| `myphoner_update_lead` | **write** | Update lead data |
| `myphoner_mark_lead_winner` | **write** | Mark a lead as winner |
| `myphoner_mark_lead_loser` | **write** | Mark a lead as loser |
| `myphoner_mark_lead_call_back` | **write** | Mark a lead for call back |
| `myphoner_archive_lead` | **write** | Archive a lead |
| `myphoner_delegate_lead` | **write** | Delegate or claim a lead |
| `myphoner_move_lead` | **write** | Move a lead to another list |
| `myphoner_get_call` | read | Get a call |
| `myphoner_usage_status` | meta | Usage status (free-tier meter) |
| `myphoner_request_feature` | meta | Request a missing feature |
| `myphoner_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `myphoner_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `myphoner_upgrade` (it returns a Stripe Checkout link). Cancel any time with `myphoner_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `myphoner_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by myPhoner.
