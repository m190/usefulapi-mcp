# Text Request MCP by usefulapi

Remote MCP endpoint: https://text-request.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://text-request.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http text-request https://text-request.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=text-request&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftext-request.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "text-request": {
      "url": "https://text-request.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Text Request credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/text-request/

<!-- connect:end (generated above, edit below) -->

Connect with your Text Request credentials using the hosted authorization flow.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `textrequest_list_dashboards` | read | List texting dashboards |
| `textrequest_get_dashboard` | read | Get a dashboard |
| `textrequest_list_conversations` | read | Review conversations |
| `textrequest_list_contact_messages` | read | Read conversation history |
| `textrequest_list_messages` | read | List dashboard messages |
| `textrequest_list_contacts` | read | Find contacts |
| `textrequest_get_contact` | read | Get a contact |
| `textrequest_list_scheduled_messages` | read | Review scheduled messages |
| `textrequest_get_scheduled_message` | read | Get a scheduled message |
| `textrequest_list_groups` | read | List groups |
| `textrequest_get_group` | read | Get a group |
| `textrequest_list_tags` | read | List tags |
| `textrequest_get_tag` | read | Get a tag |
| `textrequest_list_keywords` | read | List keywords |
| `textrequest_get_keyword` | read | Get a keyword |
| `textrequest_list_users` | read | List account users |
| `textrequest_get_user` | read | Get an account user |
| `textrequest_list_field_definitions` | read | List custom field definitions |
| `textrequest_get_field_definition` | read | Get a field definition |
| `textrequest_usage_status` | meta | Usage status (free-tier meter) |
| `textrequest_request_feature` | meta | Request a missing feature |
| `textrequest_upgrade` | meta | Upgrade to Pro or Pro+ |
| `textrequest_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per API key) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `textrequest_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `textrequest_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `textrequest_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

See the repository license.
