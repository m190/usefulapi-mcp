# Forms On Fire / Appenate MCP server

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://forms-on-fire.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http forms-on-fire https://forms-on-fire.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=forms-on-fire&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fforms-on-fire.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "forms-on-fire": {
      "url": "https://forms-on-fire.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Forms On Fire / Appenate credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/forms-on-fire/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `formsonfire_list_forms` | read | List forms |
| `formsonfire_get_form` | read | Get form definition |
| `formsonfire_search_entries` | read | Search form entries |
| `formsonfire_search_tasks` | read | Search tasks |
| `formsonfire_get_task` | read | Get task |
| `formsonfire_create_task` | **write** | Create task |
| `formsonfire_list_users` | read | List users |
| `formsonfire_get_user` | read | Get user |
| `formsonfire_list_groups` | read | List user groups |
| `formsonfire_list_data_sources` | read | List data sources |
| `formsonfire_get_data_source` | read | Get data source |
| `formsonfire_usage_status` | meta | Usage status (free-tier meter) |
| `formsonfire_request_feature` | meta | Request a missing feature |
| `formsonfire_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `formsonfire_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** (per platform and organization) | $0 | 50 tool calls / month |
| **Pro** (per platform and organization) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `formsonfire_upgrade` (it returns a Stripe Checkout link). Cancel any time with `formsonfire_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `formsonfire_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT

## Account access and data

Select the platform that hosts your account: Forms On Fire, Appenate or Appenate EU. Copy CompanyId and an API key from Organization Setup. Prefer a restricted user-level key with only the permissions needed. This is an independent customer-authorized connection; no partner approval or reseller status is claimed. Your vendor subscription, API eligibility and quotas remain separate.

The key is encrypted for authorized calls. Requested forms, answers, locations, users and task records reach your chosen AI client and LLM provider. Connect only data you are authorized to process there. Credential fields and connected-key values are removed from results. Revoke the key in the vendor dashboard to stop access; disconnect UsefulAPI to stop this connection. Billing follows the platform plus CompanyId, normally including key rotation.

Task creation requires explicit confirmation, a recipient, form external id and due time. It creates a draft by default. Setting send_immediate=true sends the task and can notify the worker. Repeating the call can create duplicate tasks or notifications; check the platform after a timeout or uncertain response. No vendor operation is automatically replayed. These tools do not send, update or delete existing tasks.

Search entries by form or a complete date range. Task and user details require their record ids. Search results include a next-page hint when more may remain. Single-entry retrieval and data-source writes are withheld pending verified contracts.

All 11 tools were checked against current vendor definitions and local mocks. Our synthetic EU trial confirmed read and task-response shapes; one draft task assigned to our own user was created, read and deleted with sending disabled. No customer data, customer notifications or paid operations were tested.
