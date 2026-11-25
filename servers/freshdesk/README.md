# Freshdesk MCP by usefulapi

Use your [Freshdesk](https://freshdesk.com) account from Claude, Cursor, or any MCP client — read tickets, contacts, companies, agents and groups, and create, update or reply to tickets. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://freshdesk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://freshdesk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http freshdesk https://freshdesk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=freshdesk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffreshdesk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "freshdesk": {
      "url": "https://freshdesk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Freshdesk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/freshdesk/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Freshdesk domain** and **API key** (Profile settings). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `freshdesk_list_tickets` | read | List tickets |
| `freshdesk_get_ticket` | read | Get ticket |
| `freshdesk_search_tickets` | read | Search tickets |
| `freshdesk_list_ticket_conversations` | read | List ticket conversations |
| `freshdesk_list_contacts` | read | List contacts |
| `freshdesk_get_contact` | read | Get contact |
| `freshdesk_search_contacts` | read | Search contacts |
| `freshdesk_list_companies` | read | List companies |
| `freshdesk_get_company` | read | Get company |
| `freshdesk_list_agents` | read | List agents |
| `freshdesk_get_agent` | read | Get agent |
| `freshdesk_list_groups` | read | List groups |
| `freshdesk_create_ticket` | **write** | Create ticket |
| `freshdesk_update_ticket` | **write** | Update ticket |
| `freshdesk_reply_ticket` | **write** | Reply to ticket |
| `freshdesk_add_note` | **write** | Add note to ticket |
| `freshdesk_create_contact` | **write** | Create contact |
| `freshdesk_update_contact` | **write** | Update contact |
| `freshdesk_create_company` | **write** | Create company |
| `freshdesk_bulk_update_tickets` | **write** | Update many tickets |
| `freshdesk_get_job` | read | Get background job status |
| `freshdesk_forward_ticket` | **write** | Forward ticket by email |
| `freshdesk_merge_tickets` | **write** | Merge tickets |
| `freshdesk_delete_ticket` | **write** | Delete ticket (to trash) |
| `freshdesk_restore_ticket` | **write** | Restore deleted ticket |
| `freshdesk_create_outbound_email` | **write** | Send outbound email (new ticket) |
| `freshdesk_list_ticket_fields` | read | List ticket fields |
| `freshdesk_list_email_configs` | read | List support email addresses |
| `freshdesk_update_note` | **write** | Edit ticket note |
| `freshdesk_list_time_entries` | read | List time entries |
| `freshdesk_create_time_entry` | **write** | Log time on ticket |
| `freshdesk_update_time_entry` | **write** | Update time entry |
| `freshdesk_toggle_timer` | **write** | Start or stop timer |
| `freshdesk_list_satisfaction_ratings` | read | List CSAT ratings |
| `freshdesk_list_surveys` | read | List surveys |
| `freshdesk_find_contacts` | read | Find contacts by name |
| `freshdesk_list_contact_fields` | read | List contact fields |
| `freshdesk_get_current_agent` | read | Who am I |
| `freshdesk_find_agents` | read | Find agents by name or email |
| `freshdesk_create_agent` | **write** | Create agent |
| `freshdesk_update_agent` | **write** | Update agent |
| `freshdesk_list_roles` | read | List roles |
| `freshdesk_get_group` | read | Get group |
| `freshdesk_create_group` | **write** | Create group |
| `freshdesk_update_group` | **write** | Update group |
| `freshdesk_find_companies` | read | Find companies by name |
| `freshdesk_search_companies` | read | Search companies |
| `freshdesk_list_company_fields` | read | List company fields |
| `freshdesk_update_company` | **write** | Update company |
| `freshdesk_list_canned_response_folders` | read | List canned response folders |
| `freshdesk_list_canned_responses` | read | List canned responses in folder |
| `freshdesk_get_canned_response` | read | Get canned response |
| `freshdesk_create_canned_response` | **write** | Create canned response |
| `freshdesk_search_solution_articles` | read | Search knowledge base |
| `freshdesk_list_solution_categories` | read | List knowledge base categories |
| `freshdesk_create_solution_category` | **write** | Create knowledge base category |
| `freshdesk_list_solution_folders` | read | List knowledge base folders |
| `freshdesk_create_solution_folder` | **write** | Create knowledge base folder |
| `freshdesk_list_solution_articles` | read | List knowledge base articles |
| `freshdesk_get_solution_article` | read | Get knowledge base article |
| `freshdesk_create_solution_article` | **write** | Create knowledge base article |
| `freshdesk_update_solution_article` | **write** | Update knowledge base article |
| `freshdesk_list_products` | read | List products |
| `freshdesk_list_sla_policies` | read | List SLA policies |
| `freshdesk_list_business_hours` | read | List business hours |
| `freshdesk_usage_status` | meta | Usage status (free-tier meter) |
| `freshdesk_request_feature` | meta | Request a missing feature |
| `freshdesk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `freshdesk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `freshdesk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `freshdesk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `freshdesk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
