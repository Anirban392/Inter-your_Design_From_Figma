import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ReusableAccordion = ({ items }) => {
  return (
    <Accordion allowToggle>
      {items.map((item, index) => (
        <AccordionItem key={index} borderBottom="1px solid" borderColor="gray.200">
          {({ isExpanded }) => (
            <>
              <AccordionButton py={4}>
                <Flex w="100%" justify="space-between" align="center">
                  <Text fontWeight="semibold">{item.title}</Text>
                  {isExpanded ? <MinusIcon /> : <AddIcon />}
                </Flex>
              </AccordionButton>

              <AccordionPanel pb={4}>
                {item.content}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ReusableAccordion;