// Radix UI ==================================================
import { Provider, Root, Trigger, Content} from "@radix-ui/react-tooltip"

// Components ================================================
const TooltipProvider = Provider

const Tooltip = Root

const TooltipTrigger = Trigger

const TooltipContent = ({ sideOffset = 4, ref, ...props }) => (
   <Content
      ref={ref}
      sideOffset={sideOffset}
      className='tooltip__content'
      {...props}
   />
)

TooltipContent.displayName = Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
