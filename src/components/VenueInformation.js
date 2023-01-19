import { Flex, FlexItem, Icon } from '@wordpress/components';

const VenueInformation = ({
	name,
	fullAddress,
	encodedAddressURL,
	phoneNumber,
	website,
}) => {
	return (
		<div className="gp-venue">
			{(name || fullAddress) && (
				<Flex justify="normal" align="flex-start" gap="4">
					<FlexItem display="flex" className="gp-venue__icon">
						<Icon icon="location" />
					</FlexItem>
					<FlexItem>
						{name && (
							<div className="gp-venue_information__name has-medium-font-size">
								<strong>{name}</strong>
							</div>
						)}
						{fullAddress && (
							<div className="gp-venue__full-address">
								{fullAddress}
							</div>
						)}
					</FlexItem>
				</Flex>
			)}
			{(phoneNumber || website) && (
				<Flex justify="normal" gap="8">
					{phoneNumber && (
						<FlexItem>
							<Flex justify="normal" gap="4">
								<FlexItem
									display="flex"
									className="gp-venue__icon"
								>
									<Icon icon="phone" />
								</FlexItem>
								<FlexItem>
									<div className="gp-venue__phone-number">
										{phoneNumber}
									</div>
								</FlexItem>
							</Flex>
						</FlexItem>
					)}
					{website && (
						<FlexItem>
							<Flex justify="normal" gap="4">
								<FlexItem
									display="flex"
									className="gp-venue__icon"
								>
									<Icon icon="admin-site-alt3" />
								</FlexItem>
								<FlexItem>
									<div className="gp-venue__website">
										<a
											href={website}
											target="_blank"
											rel="noreferrer noopener"
										>
											{website}
										</a>
									</div>
								</FlexItem>
							</Flex>
						</FlexItem>
					)}
				</Flex>
			)}
			{encodedAddressURL && (
				<Flex
					justify="normal"
					align="flex-start"
					gap="4"
					style={{ padding: '1rem 0', width: '98%' }}
				>
					<iframe
						style={{ width: '93%', height: '400px' }}
						src={encodedAddressURL}
					></iframe>
				</Flex>
			)}
		</div>
	);
};

export default VenueInformation;
