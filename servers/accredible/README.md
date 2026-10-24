# Accredible MCP by usefulapi

Use [Accredible](https://www.accredible.com) from Claude, Cursor, or any MCP client — digital credentials, groups, designs, collections, analytics and skills, plus single credential issuing.
Hosted, no local install: connect with your own Accredible credentials.

**Live endpoint:** `https://accredible.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/accredible

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://accredible.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http accredible https://accredible.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=accredible&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faccredible.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "accredible": {
      "url": "https://accredible.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Accredible credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/accredible/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `accredible_get_issuer` | read | Get the issuer (account) |
| `accredible_search_credentials` | read | Search credentials |
| `accredible_get_credential` | read | Get a credential |
| `accredible_get_credential_analytics` | read | Get a credential's analytics events |
| `accredible_list_analytics` | read | List credential analytics events |
| `accredible_search_groups` | read | Search groups |
| `accredible_get_group` | read | Get a group |
| `accredible_search_designs` | read | Search designs |
| `accredible_get_design` | read | Get a design |
| `accredible_search_departments` | read | Search departments |
| `accredible_get_department` | read | Get a department |
| `accredible_search_collections` | read | Search collections |
| `accredible_search_attribute_keys` | read | Search custom attribute keys |
| `accredible_list_skill_frameworks` | read | List skill frameworks |
| `accredible_search_skills` | read | Search skills in a framework version |
| `accredible_list_data_exports` | read | List data exports |
| `accredible_get_data_export` | read | Get a data export |
| `accredible_get_team_member` | read | Get a team member |
| `accredible_issue_credential` | **write** | Issue a credential to ONE recipient |
| `accredible_usage_status` | meta | Usage status (free-tier meter) |
| `accredible_request_feature` | meta | Request a missing feature |
| `accredible_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `accredible_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `accredible_upgrade` (it returns a Stripe Checkout link). Cancel any time with `accredible_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `accredible_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Accredible.
