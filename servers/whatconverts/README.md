# WhatConverts MCP by usefulapi

Use [WhatConverts](https://www.whatconverts.com) from Claude, Cursor, or any MCP client — leads from calls, forms and chats, accounts, profiles, users and tracking numbers, plus lead value updates.
Hosted, no local install: connect with your own WhatConverts credentials.

**Live endpoint:** `https://whatconverts.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/whatconverts

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://whatconverts.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http whatconverts https://whatconverts.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=whatconverts&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwhatconverts.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "whatconverts": {
      "url": "https://whatconverts.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your WhatConverts credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/whatconverts/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `whatconverts_list_leads` | read | List leads |
| `whatconverts_get_lead` | read | Get lead |
| `whatconverts_get_call_recording_info` | read | Get call recording info |
| `whatconverts_update_lead` | **write** | Update lead |
| `whatconverts_create_lead` | **write** | Create lead |
| `whatconverts_list_accounts` | read | List accounts |
| `whatconverts_get_account` | read | Get account |
| `whatconverts_list_profiles` | read | List profiles |
| `whatconverts_get_profile` | read | Get profile |
| `whatconverts_list_users` | read | List users |
| `whatconverts_get_user` | read | Get user |
| `whatconverts_list_roles` | read | List roles |
| `whatconverts_get_role` | read | Get role |
| `whatconverts_list_phone_numbers` | read | List tracking phone numbers |
| `whatconverts_list_web_forms` | read | List tracked web forms |
| `whatconverts_usage_status` | meta | Usage status (free-tier meter) |
| `whatconverts_request_feature` | meta | Request a missing feature |
| `whatconverts_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `whatconverts_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `whatconverts_upgrade` (it returns a Stripe Checkout link). Cancel any time with `whatconverts_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `whatconverts_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by WhatConverts.
