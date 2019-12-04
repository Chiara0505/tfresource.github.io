(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{141:function(e,n,t){"use strict";t.r(n);var o=t(0),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",[e._v("\n`   Background`\n")]),e._v("\n`   Quantified values of population, households and employment covering the`\\\n`   metropolitan area at a fine level of geographic detail are the principal`\\\n`   data elements in calculating locally generated person-travel demand over`\\\n`   the region’s transportation network. Additional socioeconomic variables are`\\\n`   also required to account for the considerable volume of commercial vehicle`\\\n`   traffic, especially trucks, having origins and destinations within or`\\\n`   beyond the metropolitan region.`\n"),t("p",[t("code",[e._v("Calculating future travel demand requires two robust methodologies to")])]),e._v(" "),t("p",[e._v("forecast the needed socioeconomic inputs. First, an "),t("em",[e._v("aggregating methodology")]),e._v(" that estimates future small-area")]),e._v(" "),t("p",[t("code",[e._v("population, household and employment values using Census data along with")])]),e._v(" "),t("p",[e._v("stated assumptions regarding expected land use. Second, a "),t("em",[e._v("disaggregating methodology")]),e._v(" that appropriately assigns determinants")]),e._v(" "),t("p",[t("code",[e._v("of national and global economic growth or decline at the metropolitan")]),t("br"),e._v(" "),t("code",[e._v("scale.")])]),e._v(" "),t("p",[t("code",[e._v("Numerous government agencies typically have land use and transportation")]),t("br"),e._v(" "),t("code",[e._v("planning jurisdiction over the modeling region. These agencies declare,")]),t("br"),e._v(" "),t("code",[e._v("with varying degrees of precision and certainty, future expectations for")]),t("br"),e._v(" "),t("code",[e._v("population, employment and economic activity in the course of preparing")]),t("br"),e._v(" "),t("code",[e._v("their long-range plans. Depending on their respective missions, these")]),t("br"),e._v(" "),t("code",[e._v("organizations may have diverging outlooks on a future that is essentially")]),t("br"),e._v(" "),t("code",[e._v("unknown beyond the next few years. Some agencies (e.g. a State DOT) as")]),t("br"),e._v(" "),t("code",[e._v("steward of tangible assets, may take a risk-averse view and prefer to make")]),t("br"),e._v(" "),t("code",[e._v("long-term planning decisions based on conservative forecasts derived from")]),t("br"),e._v(" "),t("code",[e._v("familiar conditions and previous outcomes. Other agencies (e.g. a regional")]),t("br"),e._v(" "),t("code",[e._v("MPO) may be charged with pursuing structural changes to remedy persistent")]),t("br"),e._v(" "),t("code",[e._v("social and economic problems and will prepare forecasts that reflect the")]),t("br"),e._v(" "),t("code",[e._v("outcome of sweeping policy reforms across the region.")])]),e._v(" "),t("p",[t("code",[e._v("Similarly, federal agencies (along with some private financial services)")]),t("br"),e._v(" "),t("code",[e._v("prepare and publish economic projections intended to guide national")]),t("br"),e._v(" "),t("code",[e._v("policy-making and evaluate the investment risk associated with planned")]),t("br"),e._v(" "),t("code",[e._v("government actions. As with the local agencies, these national or")]),t("br"),e._v(" "),t("code",[e._v("global-scale publications can produce a wide range of forecast values")]),t("br"),e._v(" "),t("code",[e._v("depending on their intended use. Some may use econometric techniques to")]),t("br"),e._v(" "),t("code",[e._v("predict short and medium-term risk exposure, while others extrapolate")]),t("br"),e._v(" "),t("code",[e._v("long-term historical averages decades into the future.")])]),e._v(" "),t("p",[t("code",[e._v("For purposes of travel demand modeling, these two forecasting sentiments")]),t("br"),e._v(" "),t("code",[e._v("can be reconciled through a technique of constructing alternative future")]),t("br"),e._v(" "),t("code",[e._v("scenarios. The scenarios, themselves, are distinguished by a detailed")]),t("br"),e._v(" "),t("code",[e._v("specification of the environmental (i.e. demographic, economic, social)")]),t("br"),e._v(" "),t("code",[e._v("influences that are expected to establish a pattern and intensity of")]),t("br"),e._v(" "),t("code",[e._v("business activity, thereby resulting in a plausible arrangement of land use")]),t("br"),e._v(" "),t("code",[e._v("at a prescribed future date. Each future scenario can be further")]),t("br"),e._v(" "),t("code",[e._v("distinguished by describing any supporting or countervailing government")]),t("br"),e._v(" "),t("code",[e._v("interventions assumed to bring about a desired policy objective.")]),t("br"),e._v(" "),t("code",[e._v("Alternative future scenarios are usually thematically formed by")]),t("br"),e._v(" "),t("code",[e._v("articulating varying levels of capital investment, pricing (e.g. taxes,")]),t("br"),e._v(" "),t("code",[e._v("tolls, user fees), or technological innovation. It is also necessary that")]),t("br"),e._v(" "),t("code",[e._v("the forecasting methodology account for the impact that government actions")]),t("br"),e._v(" "),t("code",[e._v("may have on environmental variables such as household composition, labor")]),t("br"),e._v(" "),t("code",[e._v("force participation or technology adoption.")])]),e._v(" "),t("p",[t("code",[e._v("In any case, each unique combination of assumed environmental influences")]),t("br"),e._v(" "),t("code",[e._v("and government interventions will affect both the rate and geographic")]),t("br"),e._v(" "),t("code",[e._v("pattern of population and employment change going forward. There are two")]),t("br"),e._v(" "),t("code",[e._v("prevailing approaches to quantifying these changes at the level-of-detail")]),t("br"),e._v(" "),t("code",[e._v("needed for travel demand modeling. One approach is to rely on empirical")]),t("br"),e._v(" "),t("code",[e._v("observation of historic trends, before-after studies and local expert")]),t("br"),e._v(" "),t("code",[e._v("opinions to manually apply changes across the region on a case-by-case")]),t("br"),e._v(" "),t("code",[e._v("basis. This approach can almost always withstand local scrutiny provided")]),t("br"),e._v(" "),t("code",[e._v("local conditions are sufficiently considered and reflected; but it is also")]),t("br"),e._v(" "),t("code",[e._v("painstakingly slow, error-prone and difficult to reproduce. A second")]),t("br"),e._v(" "),t("code",[e._v("approach is to apply econometrics and spatial statistics to automatically")]),t("br"),e._v(" "),t("code",[e._v("dampen or enhance the development potential of a geographic location in")]),t("br"),e._v(" "),t("code",[e._v("response to influences and interventions specifically stated in the")]),t("br"),e._v(" "),t("code",[e._v("scenario definition. This approach has the advantage of producing multiple")]),t("br"),e._v(" "),t("code",[e._v("scenarios in shorter time, allows for systematic error-tracking, and is")]),t("br"),e._v(" "),t("code",[e._v("capable of being modified and replicated by others.")])]),e._v(" "),t("h1",[e._v("\n`   `"),t("u",[e._v("`Defining Scenarios`")])]),e._v("\n`   A variety of public and private sources should be inventoried to ascertain`\\\n`   prevailing trends and influences relevant to the pattern of socioeconomic`\\\n`   change in the study area. The sources of information will be drawn`\\\n`   primarily from a review of publicly and privately prepared economic`\\\n`   forecast publications presented at the national, state or regional scale`\\\n`   along with capital development programs currently in effect for public`\\\n`   agencies. While these information sources are substantial, they are rarely`\\\n`   delivered in a format suitable for analyzing travel demand. The first task`\\\n`   is to develop a menu of both observed and conjectured trends and patterns`\\\n`   of population, employment, households, housing stock, income, commuting,`\\\n`   influential industries, land use constraints, special land uses (e.g.`\\\n`   airports), and major transportation network changes. From this menu of`\\\n`   individual items, thematic future scenarios can be composed guided by`\\\n`   intuitive consideration of what trends and interventions will have the`\\\n`   strongest influence on a positive or negative economic outcome. It should`\\\n`   be understood that it is essentially impossible to validate the precise`\\\n`   impact of a broad economic assumption on a particular parcel of land. The`\\\n`   econometric relationships can be clearly documented, but the estimation and`\\\n`   calibration of the terms in application are expected to be heuristic.`\n"),t("h1",[e._v("\n`   `"),t("u",[e._v("`Market Constraints `")])]),e._v("\n`   Once the menu of influences and interventions are in place, an objective`\\\n`   assessment must be performed with respect to the land use constraints that`\\\n`   would limit an econometrically derived calculation of growth potential.`\\\n`   Rather than a characteristic of “markets” `"),t("em",[e._v("`per se`")]),e._v("`, this is an`\\\n`   acknowledgement of the essential non-fungibility of land usage given the`\\\n`   nature of property rights, local land use control and longevity of building`\\\n`   stock. The inertia of a particular style, density and pattern of`\\\n`   development is then built into the menu of influences that can be included`\\\n`   in any or all future scenarios. To the extent that a radical change in land`\\\n`   use has been specified (e.g. redevelopment), the constraint to such an`\\\n`   outcome can be overridden.`\n"),t("h1",[e._v("\n`   `"),t("u",[e._v("`Micro-Level Forecast Adjustments `")])]),e._v("\n`   Up to this point, scenario-specific influences and interventions have been`\\\n`   systematically applied through the use of spatial statistics and`\\\n`   econometric equations. This produces a comprehensive and consistent result`\\\n`   across the entire modeling region. The outcome of specific transportation`\\\n`   and land use proposals, however, can be expected to be highly-context`\\\n`   dependent at the local level. It is therefore advantageous (in areas of`\\\n`   particular concern) to depart from the blind objectivity of mathematics,`\\\n`   carefully scrutinize local conditions, and then adjust the result to match`\\\n`   expert insights or intuition. Through stakeholder outreach and peer`\\\n`   exchange with those conversant in the development activities and overall`\\\n`   future growth outlook in the area, enforceable land-use policy and zoning`\\\n`   changes as well as physical and natural constraints may come to light that`\\\n`   indicate manually modifying the systematically-derived forecast`\\\n`   calculations.`\n")])}),[],!1,null,null,null);n.default=a.exports}}]);