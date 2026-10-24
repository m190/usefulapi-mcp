# Bilflo MCP by usefulapi

Read Bilflo clients, contract jobs, contractors and reports; update jobs, terminate or reopen them.

**Live endpoint:** `https://bilflo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bilflo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bilflo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bilflo https://bilflo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bilflo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbilflo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bilflo": {
      "url": "https://bilflo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bilflo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bilflo/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Bilflo **API key** (developer.bilflo.com → Credentials) and your **Company ID** (provided by your staffing company).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bilflo_list_clients` | read | List clients |
| `bilflo_get_client` | read | Get client |
| `bilflo_list_client_contacts` | read | List client contacts |
| `bilflo_list_client_addresses` | read | List client addresses |
| `bilflo_list_client_agreements` | read | List client agreements |
| `bilflo_list_client_contract_pos` | read | List client contract POs |
| `bilflo_list_client_invoice_groups` | read | List client invoice groups |
| `bilflo_get_contract_job` | read | Get contract job |
| `bilflo_list_job_pay_bill_items` | read | List job pay/bill items |
| `bilflo_list_job_approvers` | read | List job approvers |
| `bilflo_list_job_purchase_orders` | read | List job purchase orders |
| `bilflo_get_job_custom_fields` | read | Get job custom fields |
| `bilflo_get_direct_hire` | read | Get direct hire |
| `bilflo_get_contractor` | read | Get contractor |
| `bilflo_get_team_member` | read | Get team member |
| `bilflo_list_overtime_rules` | read | List overtime rules |
| `bilflo_get_company_setting` | read | Get company setting |
| `bilflo_list_custom_fields` | read | List custom fields |
| `bilflo_list_custom_field_items` | read | List custom field items |
| `bilflo_run_report` | read | Run custom report |
| `bilflo_create_client` | **write** | Create client |
| `bilflo_update_client` | **write** | Update client |
| `bilflo_update_contract_job` | **write** | Update contract job |
| `bilflo_terminate_contract_job` | **write** | Terminate contract job |
| `bilflo_reopen_contract_job` | **write** | Reopen contract job |
| `bilflo_update_contractor` | **write** | Update contractor contact details |
| `bilflo_usage_status` | meta | Usage status (free-tier meter) |
| `bilflo_request_feature` | meta | Request a missing feature |
| `bilflo_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `bilflo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `bilflo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bilflo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bilflo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Bilflo.
