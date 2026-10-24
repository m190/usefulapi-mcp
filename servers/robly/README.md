# Robly MCP by usefulapi

Find Robly contacts and lists; subscribe, update and move contacts between lists.

**Live endpoint:** `https://robly.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/robly

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://robly.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http robly https://robly.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=robly&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frobly.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "robly": {
      "url": "https://robly.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Robly credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/robly/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Robly **API ID** and **API Key** (My Account, or ask Robly support).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `robly_list_contacts` | read | List contacts |
| `robly_find_contact` | read | Find contact |
| `robly_check_list_membership` | read | Check list membership |
| `robly_list_sub_lists` | read | List sub lists |
| `robly_list_fields` | read | List data fields |
| `robly_get_signup_form` | read | Get sign-up form |
| `robly_subscribe_contact` | **write** | Subscribe contact |
| `robly_add_contact_to_list` | **write** | Add contact to list |
| `robly_remove_contact_from_list` | **write** | Remove contact from list |
| `robly_update_contact` | **write** | Update contact |
| `robly_unsubscribe_contact` | **write** | Unsubscribe contact |
| `robly_create_sub_list` | **write** | Create sub list |
| `robly_rename_sub_list` | **write** | Rename sub list |
| `robly_usage_status` | meta | Usage status (free-tier meter) |
| `robly_request_feature` | meta | Request a missing feature |
| `robly_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `robly_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `robly_upgrade` (it returns a Stripe Checkout link). Cancel any time with `robly_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `robly_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Robly.
