# Open To Close MCP by usefulapi

Hosted at https://open-to-close.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://open-to-close.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http open-to-close https://open-to-close.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=open-to-close&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fopen-to-close.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "open-to-close": {
      "url": "https://open-to-close.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Open To Close credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/open-to-close/

<!-- connect:end (generated above, edit below) -->

Generate an API token in the Open To Close Apps & API Dashboard. Usage and billing are per API token. The integration can read transaction records and, when requested, create contacts and property notes.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `opentoclose_list_agents` | read | List agents |
| `opentoclose_list_contacts` | read | List contacts |
| `opentoclose_list_contact_roles` | read | List contact roles |
| `opentoclose_list_file_roles` | read | List file roles |
| `opentoclose_list_property_fields` | read | List property fields grouped into sections |
| `opentoclose_list_property_field_groups` | read | List property field groups |
| `opentoclose_list_property_field_sections` | read | List property field sections |
| `opentoclose_list_property_templates` | read | List property templates |
| `opentoclose_list_teams` | read | List teams and their members |
| `opentoclose_list_time_zones` | read | List time zones |
| `opentoclose_list_tags` | read | List tags |
| `opentoclose_list_properties` | read | List properties |
| `opentoclose_list_property_contacts` | read | List property contacts |
| `opentoclose_list_property_documents` | read | List property documents |
| `opentoclose_list_property_notes` | read | List property notes |
| `opentoclose_get_property_note` | read | Get property note |
| `opentoclose_list_property_tasks` | read | List property tasks |
| `opentoclose_get_property_task` | read | Get property task |
| `opentoclose_create_contact` | **write** | Create contact |
| `opentoclose_add_property_note` | **write** | Add property note |
| `opentoclose_usage_status` | meta | Usage status (free-tier meter) |
| `opentoclose_request_feature` | meta | Request a missing feature |
| `opentoclose_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `opentoclose_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API token) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `opentoclose_upgrade` (it returns a Stripe Checkout link). Cancel any time with `opentoclose_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `opentoclose_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT.
